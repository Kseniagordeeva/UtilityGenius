import { randomString } from "../../helpers/util";

export const LoginData = {
  email: "testdata@yopmail.com",
  password: "Android@123",
  invalidPassword: "123451",
  errorMessage: "Wrong email or password."
};
export const searchRebatesPageData = {
  headerText: "Find a Program",
  utility: "Pacific Gas & Electric Co."
}
export const allUtilityPageData = {
  headerText: "Searching All Utilities"
}
export const pricingPageData = {
  headerText: "Pricing and Plans"
}
export const ResourceLinkData = {
  headerText: "Reports"
}
export const HelpCenterPageData = {
  headerText: "Help Center",
  email: "testdata@gmail.com",
  subject: "Automate Utility Genius",
  description: "Automate UtilityGenius Using playwright",
  successMessage: "Thank you for reaching out! Your UtilityGenius expert will get back to you within the next 24 business hours."
}
export const FeedBackPageData = {
  headerText: "Product Feedback"
}
export const MyUtilityPageData = {
  headerText: "Favorite Utilities"
}
export const myWidgetPageData = {
  headerText: "My Widgets",
  widgetName: "Test" + randomString,
  widgetLocation: "www.google.com"
}




