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
    name: string = "taner";
    surname: string = "saydam";
    identityNumber: string = "11111111111";
    email: string = "tanersaydam@gmail.com";
    gsmNumber: string = "1111111111";
    registrationDate: string = "";
    lastLoginDate: string = "";
    registrationAddress: string = "";
    city: string = "";
    country: string = "";
    zipCode: string = "";
    ip: string = "";
}
export class AddressModel {

    description: string = "kayseri";
    zipCode: string = "38000";
    contactName: string = "tanersaydam";
    city: string = "Kayseri";
    country: string = "Türkiye";
}
export class PaymentCardModel {

    cardHolderName: string = "taner saydam";
    cardNumber: string = "";
    expireMonth: string = "";
    expireYear: string = "";
    cvc: string = "323";

}