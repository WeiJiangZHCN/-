let question_number = 0;
let answer_number_list = [];

function get_list_of_topics() {
  return document.querySelectorAll("[topic]");
}

function get_list_of_answers(questionid) {
  return document.querySelector(`[topic='${questionid}']`).children[1]
    .childElementCount;
}

question_number = get_list_of_topics().length;

for (let i = 1; i <= question_number; i++) {
  answer_number_list.push(get_list_of_answers(i));
}
console.log(`问题数量为${question_number}`);
console.log(`答案数量列表为${answer_number_list}`);

export { question_number, answer_number_list };
