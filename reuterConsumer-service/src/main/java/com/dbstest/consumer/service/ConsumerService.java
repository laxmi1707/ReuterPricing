package com.dbstest.consumer.service;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.dbstest.consumer.model.ReuterPriceInternal;


@Service
public class ConsumerService {

	Map<String,Float> priceMap = new HashMap<String,Float>();
	@Autowired
    SimpMessagingTemplate template;
	
	public ConsumerService() {
		// TODO Auto-generated constructor stub
	}
	private final Logger logger = LoggerFactory.getLogger(ConsumerService.class);
	
	@KafkaListener(topics = "quickstart-events", groupId = "group_id")
	public void consume(String message){
		logger.info(String.format("$$ -> Consuming Message -> %s",message));
		String[] messageSplited = message.split(" ");
		Float bidPrice  = Float.valueOf(messageSplited[1]);//bid
		Float askPrice = Float.valueOf(messageSplited[2]);
		Float midPrice = (float) ((bidPrice + askPrice)/2.0);
		ReuterPriceInternal msgInternal = new ReuterPriceInternal();
		String symbol = messageSplited[0];
		msgInternal.setSymbol(symbol);
		msgInternal.setMidPrice(midPrice.toString());
		
		if(priceMap.containsKey(symbol)){
			Float lastValue = priceMap.get(symbol);
			logger.info(String.format("Last price",lastValue.toString()));
			if(lastValue.compareTo(midPrice) <= 0 ){ //if last price is less than current price trend is up
				msgInternal.setTrend("up");
			}else{
				msgInternal.setTrend("down");
			}
			priceMap.put(symbol, midPrice);
			
		}else{
			msgInternal.setTrend("up");
			priceMap.put(symbol, midPrice);
		}
		logger.info(String.format("$$ -> Final Message to be sent-> %s",msgInternal.toString()));
		template.convertAndSend("/topic/reuter-price", msgInternal);
	}
	

}
