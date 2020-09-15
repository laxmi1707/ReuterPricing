package com.dbstest.consumer.model;

public class ReuterPriceInternal {

	private String symbol;
    private String midPrice;
    private String trend;
   
	/**
	 * @return the symbol
	 */
	public String getSymbol() {
		return symbol;
	}

	/**
	 * @param symbol the symbol to set
	 */
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	/**
	 * @return the bidPrice
	 */
	public String getMidPrice() {
		return midPrice;
	}

	/**
	 * @param bidPrice the bidPrice to set
	 */
	public void setMidPrice(String midPrice) {
		this.midPrice = midPrice;
	}

	
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ReuterPriceInternal [symbol=" + symbol + ", midPrice=" + midPrice + ", trend=" + trend
				 + "]";
	}

	public ReuterPriceInternal() {
		// TODO Auto-generated constructor stub
	}

	public String getTrend() {
		return trend;
	}

	public void setTrend(String trend) {
		this.trend = trend;
	}

}
