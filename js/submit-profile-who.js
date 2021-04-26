//checkbox handler

//occupation
var occupation_professional_checkbox = document.querySelector("input[name=occupation-professional-checkbox]");
var occupation_self_employed_checkbox = document.querySelector("input[name=occupation-self-employed-checkbox]");
var occupation_unemployed_checkbox = document.querySelector("input[name=occupation-unemployed-checkbox]");
var occupation_student_checkbox = document.querySelector("input[name=occupation-student-checkbox]");
var occupation_no_preference_checkbox = document.querySelector("input[name=occupation-no-preference-checkbox]");

occupation_professional_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("occupation-professional").value = "Professional"
    } else {
        document.getElementById("occupation-professional").value = ""
    }
});

occupation_self_employed_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("occupation-self-employed").value = "Self Employed"
    } else {
        document.getElementById("occupation-self-employed").value = ""
    }
});

occupation_unemployed_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("occupation-unemployed").value = "Unemployed"
    } else {
        document.getElementById("occupation-unemployed").value = ""
    }
});

occupation_student_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("occupation-student").value = "Student"
    } else {
        document.getElementById("occupation-student").value = ""
    }
});
occupation_no_preference_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("occupation-no-preference").value = "No Preference"
    } else {
        document.getElementById("occupation-no-preference").value = ""
    }
});


//religion
var religion_christian_checkbox = document.querySelector("input[name=religion-christian-checkbox]");
var religion_muslim_checkbox = document.querySelector("input[name=religion-muslim-checkbox]");
var religion_other_checkbox = document.querySelector("input[name=religion-other-checkbox]");
var religion_no_preference_checkbox = document.querySelector("input[name=religion-no-preference-checkbox]");

religion_christian_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("religion-christian").value = "Christian"
    } else {
        document.getElementById("religion-christian").value = ""
    }
});

religion_muslim_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("religion-muslim").value = "Muslim"
    } else {
        document.getElementById("religion-muslim").value = ""
    }
});


religion_other_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("religion-other").value = "Other"
    } else {
        document.getElementById("religion-other").value = ""
    }
});

religion_no_preference_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("religion-no-preference").value = "No Preference"
    } else {
        document.getElementById("religion-no-preference").value = ""
    }
});

var education_highSchool_checkbox = document.querySelector("input[name=education-highSchool-checkbox]");
var education_undergraduate_checkbox = document.querySelector("input[name=education-undergraduate-checkbox]");
var education_graduate_checkbox = document.querySelector("input[name=education-graduate-checkbox]");
var education_no_preference_checkbox = document.querySelector("input[name=education-no-preference-checkbox]");


education_highSchool_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("education-highSchool").value = "Hight School"
    } else {
        document.getElementById("education-highSchool").value = ""
    }
});

education_undergraduate_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("education-undergraduate").value = "Undergraduate"
    } else {
        document.getElementById("education-undergraduate").value = ""
    }
});

education_graduate_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("education-graduate").value = "Graduate"
    } else {
        document.getElementById("education-graduate").value = ""
    }
});


education_no_preference_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("education-no-preference").value = "No Preference"
    } else {
        document.getElementById("education-no-preference").value = ""
    }
});


var gender_male_checkbox = document.querySelector("input[name=gender-male-checkbox]");
var gender_female_checkbox = document.querySelector("input[name=gender-female-checkbox]");
var gender_no_preference_checkbox = document.querySelector("input[name=gender-no-preference-checkbox]");

gender_male_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("gender-male").value = "Male"
    } else {
        document.getElementById("gender-male").value = ""
    }
});

gender_female_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("gender-female").value = "Female"
    } else {
        document.getElementById("gender-female").value = ""
    }
});

gender_no_preference_checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("gender-no-preference").value = "No Preference"
    } else {
        document.getElementById("gender-no-preference").value = ""
    }
});



//submit form
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        var uid = user.uid;
        var database = firebase.database();
        document
            .getElementById("profile-who")
            .addEventListener("submit", submitForm);

        function submitForm(e) {
            e.preventDefault();

            var gendermale = document.querySelector("#gender-male").value;
            var genderfemale = document.querySelector("#gender-female").value;
            var gender_no_preference = document.querySelector("#gender-no-preference").value;
            var age_preference = document.querySelector("#age-preference").value;

            var occupation_professional = document.querySelector("#occupation-professional").value;
            var occupation_self_employed = document.querySelector("#occupation-self-employed").value;
            var occupation_unemployed = document.querySelector("#occupation-unemployed").value;
            var occupation_student = document.querySelector("#occupation-student").value;
            var occupation_no_preference = document.querySelector("#occupation-no-preference").value;

            var religion_christian = document.querySelector("#religion-christian").value;
            var religion_muslim = document.querySelector("#religion-muslim").value;
            var religion_other = document.querySelector("#religion-other").value;
            var religion_no_preference = document.querySelector("#religion-no-preference").value;


            var education_highSchool = document.querySelector("#education-highSchool").value;
            var education_undergraduate = document.querySelector("#education-undergraduate").value;
            var education_graduate = document.querySelector("#education-graduate").value;
            var education_no_preference = document.querySelector("#education-no-preference").value;


            var smoking = document.querySelector("#smoking").value;
            var pets = document.querySelector("#pets").value;
            var party = document.querySelector("#party").value;
            var children = document.querySelector("#children").value;
            var additional_rules = document.querySelector("#additional-rules").value;



            writeUserData(gendermale,
                genderfemale,
                gender_no_preference,
                age_preference,
                occupation_professional,
                occupation_self_employed,
                occupation_unemployed,
                occupation_student,
                occupation_no_preference,
                religion_christian,
                religion_muslim,
                religion_other,
                religion_no_preference,
                education_highSchool,
                education_undergraduate,
                education_graduate,
                education_no_preference,
                smoking,
                pets,
                party,
                children,
                additional_rules
            );
        }

        function writeUserData(
            gendermale,
            genderfemale,
            gender_no_preference,
            age_preference,
            occupation_professional,
            occupation_self_employed,
            occupation_unemployed,
            occupation_student,
            occupation_no_preference,
            religion_christian,
            religion_muslim,
            religion_other,
            religion_no_preference,
            education_highSchool,
            education_undergraduate,
            education_graduate,
            education_no_preference,
            smoking,
            pets,
            party,
            children,
            additional_rules
        ) {
            firebase.database().ref("Host-Preferences").push({
                gendermale: gendermale,
                genderfemale: genderfemale,
                gender_no_preference: gender_no_preference,
                age_preference: age_preference,
                occupation_professional: occupation_professional,
                occupation_self_employed: occupation_self_employed,
                occupation_unemployed: occupation_unemployed,
                occupation_student: occupation_student,
                occupation_no_preference: occupation_no_preference,
                religion_christian: religion_christian,
                religion_muslim: religion_muslim,
                religion_other: religion_other,
                religion_no_preference: religion_no_preference,
                education_highSchool: education_highSchool,
                education_undergraduate: education_undergraduate,
                education_graduate: education_graduate,
                education_no_preference: education_no_preference,
                smoking: smoking,
                pets: pets,
                party: party,
                children: children,
                additional_rules: additional_rules,
                uid: uid,
            });
            window.location.href = "profile-you.html";
        }

    }
});