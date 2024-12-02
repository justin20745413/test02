## 檔案依照作業代碼區分，例如 amso0101.ts

## 依照API規格分別建立request & response DTO，命名方式依照以下規則

- request 統一建立 class 取名以 {代號}{行為}{目標}Req 為主並統一建立 constructor 並且可接收自己作為參數初始化，例如

<pre>
export class AMSO0101EditPasswordReq {
	constructor(data?: AMSO0101EditPasswordReq) { // 必要時可接 Partial
		if (!data) return;
		const { cid, newCid } = data;
		this.cid = cid || ''; // 可以在這邊定義預設值
		this.newCid = newCid;
	}
	cid: string = ''; //	舊密碼
	newCid: string = ''; //	新密碼
}

初始化等等動作直接 new 一個物件
const form = ref(new AMSO0101EditPasswordReq())
</pre>

- reponse 統一建立 interface 取名以 I{代號}{行為}{目標}Res 為主，例如

<pre>
export interface IAMSO0101EditPasswordRes {
	status: AdminEditPasswordEnum; //	更改狀態	0:更改成功 -1:舊密碼錯誤
}

搭配 IResponse 泛型使用
</pre>

## Req 資料格式建立可以方便綁資料為主，若有特殊格式轉換需求統一添加 getParams 方法取得 API 需求的參數

<pre>
假設發送出去的屬性要加密/過濾xss/格式轉換
export class AMSO0101EditPasswordReq {
	constructor(data?: AMSO0101EditPasswordReq) { 
		...
	}
  屬性可以方便接畫面為主
	cid: string = ''; //	舊密碼
	newCid: string = ''; //	新密碼

  getParams(){
    return {
      ...轉換過的格式
    }
  }
}

外部使用時改為傳遞 getParams
editPasswordApi(form.value.getParams()).then(...)

</pre>

## API 文件上的非維護代號類型欄位統一建立 Enum，命名需明確描述模組以及作用，並以 Enum 結尾，屬性命名使用常數全大寫

<pre>
X enum ColorEnum
O enum SystemColorEnum
O enum ButtonColorEnum
</pre>
