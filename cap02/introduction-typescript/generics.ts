interface Comparable1<T> {
  compareTo1(b: T): number;
}

class MyObject1 implements Comparable1<MyObject> {
  age: number;
  compareTo1(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
