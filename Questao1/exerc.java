import java.util.Scanner;

public class exerc{

   public static void main(String[] args) {

       Scanner n = new Scanner(System.in);
       int i, j;


       System.out.println("Informe um numero ");
       int numero = n.nextInt();     

       for( i = 1; i <= numero; i++) 
       {    
           for( j = numero - i; j >= 1; j--)  {  // imprime os espaços 
                 System.out.print(" ");  }
           for( j = 1; j <= i; j++) 
                System.out.print("*");  // imprime os **
                System.out.println();
    
    }

   }
}