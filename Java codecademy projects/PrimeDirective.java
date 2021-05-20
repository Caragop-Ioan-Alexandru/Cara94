// Import statement:
import java.util.ArrayList;
class PrimeDirective {
    ArrayList<Integer> even = new ArrayList<Integer>();
    ArrayList<Integer> odd = new ArrayList<Integer>();
  // Add your methods here:
  public boolean isPrime(int number) {
    if (number < 2){
      return false;
    } else if (number == 2) {
      return true;
    } else for (int i = 2; i < number; i++) {
      if (number % i == 0) return false;
    } return true;
  }
  public ArrayList<Integer> onlyPrimes(int[] numbers){
    ArrayList<Integer> primes = new ArrayList<Integer>();
    for(int number : numbers){ 
     if (isPrime(number)) primes.add(number);
    } return primes;
  }
  public ArrayList<Integer> filterEven(int[] numbers){
    for(int number : numbers) {
      if(number % 2 == 0) even.add(number);
    } return even;
  }
  public ArrayList<Integer> filterOdd(int[] numbers){
    for(int number : numbers) {
      if(number % 2 != 0) odd.add(number);
    } return odd;
  }
  public Object[] filterOddEven(int[] numbers){
    for(int number : numbers) {
      if(number % 2 == 0) even.add(number);
      else odd.add(number); 
    } return new Object[]{odd, even};
  }
  public String toString(int[] numbers){
   filterOddEven(numbers);
    return("Odd numbers from the selected array are: " + odd + " Even Numbers from the selected array are: "+ even);
  }

  public static void main(String[] args) {

    PrimeDirective pd = new PrimeDirective();
  // You can change numbers inside the following array
    int[] numbers = {6, 29, 28, 33, 11, 100, 101, 43, 89};
    
    System.out.println("Prime numbers from the selected array are: " + pd.onlyPrimes(numbers));
  /*Uncomment convenient display depending on your desire:
  1. If you wish to filter both odd and even numbers;
  2. If you wish to filter only odd numbers;
  3. If you wish to filter only even numbers;
  */
    System.out.println(pd.toString(numbers)); // 1
 /*   System.out.println("Odd numbers from the selected array are: " + pd.filterOdd(numbers)); // 2
      System.out.println("Even Numbers from the selected array are: " + pd.filterEven(numbers)); // 3
  */
  }  

}
