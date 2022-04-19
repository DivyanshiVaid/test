import React from "react";
import Data from "../Data";
const Array = () => {
  let Join = Data.join("_");
  console.log("Join>>>>>", Join);

  let Pop = Data.pop();
  console.log("pop>>>>", Pop);

  let Length = Data.length;
  console.log("length>>>>", Length);

  let Delete = delete Data[4];
  console.log("delete>>>>", Delete);
  // Adds new item in an array after removing the item, ist parameter is where the new item should be place and 2nd parameter is how many items should be removed ,returns the removed items
  let Splice = Data.splice(0, 3);
  console.log("splice>>>", Splice);
  // slice do not removes any thing from original array,ist parameter is the starting and the slice is upto the but not includig last parameter
  let Slice = Data.slice(7, 10);
  console.log("slice>>>", Slice);

  function ForEach(value, index) {
    value.title = "my custome title";
  }

  let For_Each = Data.forEach(ForEach);
  console.log("for each>>>>", Data, For_Each);

  let Filter = Data.filter((item) => item.id);
  console.log("filter>>>>", Filter);

  //   for the reduce method The total (the initial value / previously returned value)
  // The item value
  // The item index
  // The array itself

  function ReduceFuncton(item, value, index) {
    return item + value + index;
  }
  let Reduce = Data.reduce(ReduceFuncton);
  console.log("Reduce>>>", Reduce);

  //   every method returns true or false as it checks the whole array  and returns the results

  function Some_EveryFunction(item, value) {
    return value.length > 9;
  }
  let Every = Data.every(Some_EveryFunction);

  console.log("Every>>", Every);

  let Some = Data.some(Some_EveryFunction);
  console.log("some>>>", Some);

  //   find method

  let Find = Data.find((item) => item.id);
  console.log("find>>>>", Find);

  // array keys

  let Keys = Data.keys();
  console.log("keys>>>", Keys);

  const Items = new Map([
    ["name", "abc"],
    ["age", 10],
  ]);

  console.log(Items, Items.keys(), Items.values());

  //   Set nd Map method
  const fruits = ["Banana", "Banana", "Orange", "Apple", "Mango"];
  const veggies = ["potato", "tomato", "beans"];
  const AddArr = [...fruits, "", ...veggies];
  const keys = fruits.keys();

  console.log(keys);

  const data = [...new Set(fruits)];
  console.log(fruits, data);
  return (
    <div>
      <h2>Hello</h2>
      {Data &&
        Data.map((item, id) => {
          return (
            <div key={id}>
              <div>
                {/* mapping method */}
                {/* <p>{item.title}</p> */}
              </div>
              {/* tostring method */}
              {/* <div>{item.id.toString()}</div> */}
            </div>
          );
        })}
      <div>{AddArr}</div>   
    </div>
  );
};
export default Array;
