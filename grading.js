function grading(grades){
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade < 38 ){
            console.log(grade);
        } else if (Math.ceil(grade/5)*5 - grade < 3){
            console.log(Math.ceil(grade/5)*5);
        } else {
            console.log(grade);
        }
    }
    
}

grading([73,67,38,33]);





