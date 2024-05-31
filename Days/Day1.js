```java
import java.util.ArrayList;
import java.util.List;

public class ArrayFlattener {

    /**
     * This method takes a nested array of integers and returns a flattened array.
     *
     * @param nestedArray the nested array of integers
     * @return the flattened array
     */
    public static Integer[] flatArray(Integer[][] nestedArray) {
        List<Integer> flattenedList = new ArrayList<>();
        flatten(nestedArray, flattenedList);
        return flattenedList.toArray(new Integer[0]);
    }

    /**
     * Helper method to flatten the nested array recursively.
     *
     * @param nestedArray   the nested array of integers
     * @param flattenedList the list to store the flattened array
     */
    private static void flatten(Integer[][] nestedArray, List<Integer> flattenedList) {
        for (Integer[] array : nestedArray) {
            for (Integer element : array) {
                flattenedList.add(element);
            }
        }
    }

    public static void main(String[] args) {
        Integer[][] nestedArray = {{1, 2, 3}, {4, 5}, {6, 7, 8}};
        Integer[] flattenedArray = flatArray(nestedArray);
        for (Integer element : flattenedArray) {
            System.out.print(element + " ");
        }
    }
}
```