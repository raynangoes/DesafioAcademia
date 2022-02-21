import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


public class exe3 {

    static int anagramas(String palavra) {
		
        Map<String, Integer> nomes = new HashMap<>();
        for (int i = 0; i < palavra.length(); i++) {
            for (int j = i; j < palavra.length(); j++) {
                char stringpar [] = palavra.substring(i, j + 1).toCharArray();
                Arrays.sort(stringpar);
                String novapalavra = new String(stringpar);

                if (nomes.containsKey(novapalavra)) {
                    nomes.put(novapalavra, nomes.get(novapalavra) + 1);
                } else {
                    nomes.put(novapalavra, 1);
                }
            }
        }
        int pares = 0;
        for (String novapalavra : nomes.keySet()) {
            int i = nomes.get(novapalavra);
            pares += (i * (i - 1)) / 2;
        }
        return pares;
    }

    public static void main(String[] args) {

        Scanner r = new Scanner(System.in);

        System.out.print("Escreva uma  palavra ");
        String resposta = r.next();

        System.out.print(" Quantidade de anagramas possiveis "  + anagramas(resposta) );

    }

}