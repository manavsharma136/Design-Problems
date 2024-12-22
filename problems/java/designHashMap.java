// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.




class MyHashMap {
    int[] arr;
    boolean[] exists;
    public MyHashMap() {
        this.arr=new int[1000001];
        this.exists = new boolean[1000001];
    }
    
    public void put(int key, int value) {
        if(!exists[key]){
            exists[key]=true;
        }
        arr[key]=value;
    }
    
    public int get(int key) {
        if(!exists[key]){
            return -1;
        }
        return arr[key];
    }
    
    public void remove(int key) {
        exists[key]=false;
    }
}
