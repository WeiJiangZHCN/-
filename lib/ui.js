import { answer_number_list } from "./quary";
let container = document.createElement("div");
container.style.cssText = "position: absolute; top: 0; right: 0;";
document.body.appendChild(container);

function gene_input(div, value, id) {
  let input = document.createElement("input");
  input.value = value;
  input.id = id;
  div.appendChild(input);
}

function gene_label(div, text, id) {
  let label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = id;
  div.appendChild(label);
}

function gene_compose() {
  for (let [i, v] of answer_number_list.entries()) {
    let div = document.createElement("div");
    let n = i + 1;
    gene_label(div, "问题 " + n, "mq" + i);
    gene_input(div, v, "mq" + i);
    container.appendChild(div);
  }
}

gene_compose();
let button = document.createElement("button");
button.innerText = "提交";
button.addEventListener("click", function () {
    gene_input_value([1, 3, 4, 3, 3, 2, 2, 3, 5, 4, 3])
  get_radios_list(container);
});
container.appendChild(button);

function get_radios_list(div) {
  let inputs = div.querySelectorAll("[id^='mq']");
  for (let [i, v] of inputs.entries()) {
    let value = v.value.split(",").map((x) => parseFloat(x));
    answer_number_list[i] = value;
  }
  console.log(answer_number_list);
}

function gene_input_value(list) {
  for (let [i, v] of list.entries()) {
  
    let input = document.querySelector("#mq" + i);
    input.value = gene_ratio(v).toString();
  }
}


function gene_ratio(count) {
    let list = [];
    if (count === 1) {
        return [1];
    }
    for (let i = 0; i < count; i++) {
      if (i === 0) {
        let ratio = Math.ceil(Math.random()*100)/100;
        list.push(ratio);
      } else if (i < count - 1) {
        let n = 0
        while (true) {
            if (n > 100) {
                break;
            }
          n++
          console.log("1");
          let ratio = Math.ceil(Math.random()*100)/100;
          if (ratio < 1 - sum(list)) {
            list.push(ratio);
            break;
          }
        }
      } else if (i === count - 1) {
        // 最后一个Math.ceil(1-sum(list)*100)/100
        list.push(Math.ceil(100-sum(list)*100)/100);
      }
    }
    return list;
  }

function sum(list) {
  let sum = 0;
  for (let [j, v] of list.entries()) {
    sum += v;
  }
  return sum;
}


import { questions_info, questions } from "./quary";

for (let [i, v] of questions.entries()) {
  if (questions_info[i].type === "6") {
    continue;
  }
  for (let [j, option] of v.children[1].childNodes.entries()) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.placeholder = "请输入百分比，例如 0.33";
    input.id = `${i + 1}_${j + 1}`;
    div.appendChild(input);
    option.appendChild(div);
  }
}
