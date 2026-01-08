-- AddIndex na User.email dla szybszych zapytań podczas logowania
CREATE INDEX [IDX_User_Email] ON [LocalUser]([email]);
