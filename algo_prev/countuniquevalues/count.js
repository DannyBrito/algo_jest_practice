export default function countUniqueValues(arr){
      if(!arr.length) return 0
      let left = 0;
      let next  = 1;
      while(next < arr.length){
          if(arr[left] !== arr[next]){
              left++;
              arr[left] = arr[next]
          }
          next++;
      }
      return left + 1;
  }