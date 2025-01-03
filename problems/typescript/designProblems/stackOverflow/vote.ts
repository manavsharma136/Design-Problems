import { user } from "./user";
class Vote {
    public voter: user;
    public isUpvote: boolean;
  
    constructor(voter: user, isUpvote: boolean) {
      this.voter = voter;
      this.isUpvote = isUpvote;
    }
  }
  