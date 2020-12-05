//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor() {
    this._balance = 0;
    this._accountOpen = false;
  }

  open() {
    if(this._accountOpen)
      throw new ValueError 
    else
      this._accountOpen = true;
  }

  close() {
    if(this._accountOpen) {
      this._accountOpen = false;
      this._balance = 0;
    }
    else
      throw new ValueError 
  }

  deposit(amount) {
    if(this._accountOpen && amount >= 0)
      this._balance += amount;
    else
      throw new ValueError 
  }

  withdraw(amount) {
    if(this._accountOpen && amount <= this._balance && amount >= 0)
      this._balance -= amount;
    else
      throw new ValueError 
  }

  get balance() {
    if(this._accountOpen)
      return this._balance;
    else
      throw new ValueError()
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
