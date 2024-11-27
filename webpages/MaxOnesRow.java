
    public class MaxOnesRow {
        public static int findMaxOnesRow(int[][] matrix) {
            int maxOnes = 0;
            int rowIndex = -1;
            
            for (int i = 0; i < matrix.length; i++) {
                int countOnes = 0;
                for (int j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        countOnes++;
                    }
                }
                if (countOnes > maxOnes) {
                    maxOnes = countOnes;
                    rowIndex = i;
                }
            }
            
            return rowIndex + 1; // Return 1-based row index
        }
    
        public static void main(String[] args) {
            int[][] matrix = {
                {0, 1, 1, 1},
                {0, 0, 1, 1},
                {1, 1, 1, 1},
                {0, 0, 0, 0}
            };
            
            int result = findMaxOnesRow(matrix);
            System.out.println("Row " + result + " has the maximum 1's."); // Output: Row 3
        }
    }
    
    
