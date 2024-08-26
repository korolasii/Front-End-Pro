let ladder = {
    step: 0,
    buryOneself: null,
    up: function () {
        this.step += 1;
        return this;
    },
    down: function () {
        if (this.step === 0 && this.buryOneself === null) {
            this.buryOneself = confirm("Do you want to dig in?");
        }

        if (this.buryOneself || this.step > 0) {
            this.step -= 1;
        } else {
            alert(`You can't go lower ${this.step}`);
        }
        return this;
    },
    showStep: function() {
        console.log(this.step);
        return this;
    }
}

ladder.up().up().down().down().down().down().up().showStep();
