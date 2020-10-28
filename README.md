# How to use
This project is for flatiron students who have fallen to a previous cohort and wants to redo labs that they have done in a previsou cohort

Just enter your old submitted git url and it will create you new cohorts link.

# How to make your own
./UrlParser line 20

        let newUrl = this.state.value.replace('Bouloute', 'learn-co-students').replace('online-web-pt-120919', 'onl01-seng-pt-030220')

Identify the differences between your old cohort url and your new cohort url and update this line


Don't forget to make sure you change "Bouloute" with your git name.