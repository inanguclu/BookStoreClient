import { BookModel } from "./book.model";

export class PaymentModel {
    books: BookModel[] = []
    buyer: BuyerModel = new BuyerModel();
    shippingAddress: AddressModel = new AddressModel();
    billingAddress: AddressModel = new AddressModel();
    paymentCart: PaymentCardModel = new PaymentCardModel();
}
export class BuyerModel {

    id: string = "";
    name: string = "";
    surname: string = "";
    identityNumber: string = "";
    email: string = "";
    gsmNumber: string = "";
    registrationDate: string = "";
    lastLoginDate: string = "";
    registrationAddress: string = "";
    city: string = "";
    country: string = "";
    zipCode: string = "";
    ip: string = "";
}
export class AddressModel {

    description: string = "";
    zipCode: string = "";
    contactName: string = "";
    city: string = "Kayseri";
    country: string = "Türkiye";
}
export class PaymentCardModel {

    cardHolderName: string = "";
    cardNumber: string = "";
    expireMonth: string = "";
    expireYear: string = "";
    cvc: string = "";

}