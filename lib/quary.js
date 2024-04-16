// let question_number = 0;
// let answer_number_list = [];

// function get_list_of_topics() {
//   return document.querySelectorAll("[topic]");
// }

// function get_list_of_answers(questionid) {
//   return document.querySelector(`[topic='${questionid}']`).children[1]
//     .childElementCount;
// }

// question_number = get_list_of_topics().length;

// for (let i = 1; i <= question_number; i++) {
//   answer_number_list.push(get_list_of_answers(i));
// }
// console.log(`问题数量为${question_number}`);
// console.log(`答案数量列表为${answer_number_list}`);

// export { question_number, answer_number_list };

let questions_info = [];

let questions = document.querySelectorAll("[topic]");

if (localStorage.getItem("questions_info")) {
  questions_info = JSON.parse(localStorage.getItem("questions_info"));
} else {
  for (let [i, v] of questions.entries()) {
    let question_info = {
      id: `${i + 1}`, //问题序号
      type: v.getAttribute("type"), //问题类型
      number: undefined, //问题选项数量
      maxvalue:v.getAttribute("maxvalue"),
      value:v,
    };
    if (question_info.type = "5"){
      question_info.number = v.querySelectorAll("li").length
    }else{
      question_info.number = v.children[1].childElementCount
    }
    
    questions_info.push(question_info);
  }
}

export { questions, questions_info };
