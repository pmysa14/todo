import "./styles.css";

const onclickadd = () => {
  //テキストボックスの値を受け取り、初期化する
  const inputtext = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";

  createimcompletedlist(inputtext);
};

//未完了リストから指定の要素を削除関数
const deletefromimcompletelist = (target) => {
  document.getElementById("imcompleted-list").removeChild(target);
};

//未完了リストに追加する関数
const createimcompletedlist = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li作成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ作成
  const completedbutton = document.createElement("button");
  completedbutton.innerText = "完了";
  completedbutton.addEventListener("click", () => {
    //完了ボタンが押された時、完了タブを未完了リストから削除する
    deletefromimcompletelist(completedbutton.parentNode);
    //完了リストに追加する
    const addtarget = completedbutton.parentNode;
    //todo内のテキストを取得
    const text = addtarget.firstElementChild.innerText;

    //div以下を初期化
    addtarget.textContent = null;

    //divタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //ボタンタグ生成
    const backbotton = document.createElement("button");
    backbotton.innerText = "戻す";
    backbotton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除する
      const deletetarget = backbotton.parentNode;
      document.getElementById("completed-list").removeChild(deletetarget);

      //テキスト取得
      const text = backbotton.parentNode.firstElementChild.innerText;
      createimcompletedlist(text);
    });

    //divタグの子要素に各要素を設定
    addtarget.appendChild(li);
    addtarget.appendChild(backbotton);
    //完了リストに追加
    document.getElementById("completed-list").appendChild(addtarget);
  });

  //button(削除)タグ作成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //削除ボタンが押された時、削除タブを未完了リストから削除する
    deletefromimcompletelist(deletebutton.parentNode);
  });

  //divタグに各要素を設定
  div.appendChild(li);
  div.appendChild(completedbutton);
  div.appendChild(deletebutton);

  //未完了リストに追加
  document.getElementById("imcompleted-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickadd());
