// import { answer_number_list } from "./quary";

function answer(question_id, answer_id) {
  document.querySelector(`[for='q${question_id}_${answer_id}']`).click();
}

// function get_how_to_answer(ratio_list) {
//   let answer_count_lists = localStorage.getItem("answer_count_lists")?.split(",");
//   if (answer_count_lists) {
//     answer_all(ratio_list, answer_count_lists);
//   } else {
//     let answer_count_lists = [];
//     for (let [i, v] of answer_number_list.entries()) {
//       answer_count_lists.push(Array(v).fill(0));
//       let j = get_random(v);
//       answer(i+1, j);
//       answer_count_lists[i][j]+=1;
//     }
//     localStorage.setItem("answer_count_lists",answer_count_lists);
//   }
// }
function answer_all(ratio_list, answer_count_lists) {
  for (let [i, answer_count_list] of answer_count_lists.entries()) {
    for (let [j, answer] of answer_count_list.entries()) {
      let ratio = get_ratio(i, list);
      if (ratio < ratio_list[i][j]) {
        answer(i, j);
        break;
      }
    }
  }
}

function get_random(count) {
  return Math.ceil(Math.random() * count);
}

function get_ratio(index, list) {
  let number = 0;
  for (let i of list) {
    number += i;
  }
  return list[index] / number;
}


// export {
//     get_how_to_answer,
// }

import { questions_info } from "./quary";

function main(params) {
  // if (localStorage.getItem("answer_count_lists")){
  //   let answer_count_lists =JSON.parse(localStorage.getItem("answer_count_lists"));
  //   for (let [i, v] of questions_info.entries()) {
  //    let list =  answer_count_lists[i]
  //   }
  // }else{
  //   let answer_count_lists = [];
  //   for (let [i, v] of questions_info.entries()) {
  //     if (v.type === "6"){
  //       continue;
  //     }
  //     answer_count_lists.push(Array(v.number).fill(0));
  //     let j = get_random(v.number);
  //     answer(i+1, j);
  //     answer_count_lists[i][j-1]+=1;
  //   }
  //   localStorage.setItem("answer_count_lists",JSON.stringify(answer_count_lists));
  // }

  for (let [i, v] of questions_info.entries()) {
        if (v.type === "4"){
          let j = get_random(v.maxvalue);
          console.log(j)
          let dis = {}
          for (let k = 0; k < j; k++) {
            while (true) {
              let l = get_random(v.number);
              if (dis[l] === undefined) {
                dis[l] = 1;
                answer(i+1, l);
                break;
              }
            }
          }
          continue;
        }
        if (v.type === "5"){
          let j = get_random(100);
          if (j<=8){
            v.value.querySelectorAll("li")[0].click()
          }else if(j<=12){
            v.value.querySelectorAll("li")[1].click()
          }else if (j<=20){
            v.value.querySelectorAll("li")[2].click()
          }else if(j<=40){
            v.value.querySelectorAll("li")[3].click()
          }else{
            v.value.querySelectorAll("li")[4].click()
          }
          continue;
        } 
        let j = get_random(v.number);
        answer(i+1, j);
      }
}
export {
    main,
}