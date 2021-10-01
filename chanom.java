import java.lang.Math;

class chanom {
	static double getRandomInt(int m) {
		double randomOut = Math.floor(Math.random() * m) + 1;
		return randomOut;
	};
	public static void main(String[] args) {
		double handsome;
		handsome = getRandomInt(1);
		System.out.println("Chanom is only handsome : "+ handsome + "% of Me!");
	}
}