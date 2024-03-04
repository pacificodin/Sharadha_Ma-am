import java.util.*;
public class product{
    public static void main(String[] args) {
        
    }
    class Solution {
        public int subtractProductAndSum(int n) {
            
            int sum=0;
            int product=0;
            int num=n;
            for(int i=0;i<Math.log(n)+1;i++){
                int rem=num%10;
                sum+=rem;
                product*=rem;
                num/=10;
            }
            int ans=(product-sum);
            return ans;
        }
    }
}