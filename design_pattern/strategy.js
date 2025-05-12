class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  pay(paymentStrategy) {
    const total = this.calculateTotal();
    if (!paymentStrategy) {
      throw new Error("결제 방법이 설정되지 않았습니다.");
    }

    return paymentStrategy.pay(total);
  }
}

class NaverPayStrategy {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.loggedIn = false;
  }

  login() {
    console.log(`${this.email}로 네이버페이 로그인 완료`);
    this.loggedIn = true;
  }

  pay(amount) {
    if (!this.loggedIn) {
      this.login();
    }
    console.log(`네이버페이로 ${amount}원 결제 완료`);
    return true;
  }
}

class CardStrategy {
  constructor(cardNumber, cvv, expiryDate, ownerName) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expiryDate = expiryDate;
    this.ownerName = ownerName;
  }

  pay(amount) {
    console.log(`카드 ${this.cardNumber.slice(-4)}로 ${amount}원 결제 완료`);
    return true;
  }
}

class CashStrategy {
  pay(amount) {
    console.log(`현금으로 ${amount}원 결제 완료`);
    return true;
  }
}

function main() {
  const cart = new ShoppingCart();
  cart.addItem(new Item("노트북", 1200000));
  cart.addItem(new Item("마우스", 35000));

  // 네이버페이로 결제
  const naverPay = new NaverPayStrategy("user@example.com", "password123");
  cart.pay(naverPay);

  // 카드로 결제
  const card = new CardStrategy(
    "1234-5678-9101-1121",
    "123",
    "12/25",
    "홍길동"
  );
  cart.pay(card);

  // 현금으로 결제
  const cash = new CashStrategy();
  cart.pay(cash);
}
main();
