function mainClassifier() {

    var classifier = new jsregression.MultiClassLogistic({
        alpha: 0.005,
        iterations: 1000,
        lambda: 0.0
    });

    var trainingData = [];
    var testingData = [];

    for (var i = 0; i < 100; ++i) {
        if (i < 40) {
            trainingData.push([0, 1, 0])
            testingData.push(0)
        } else if (i < 60 && i >= 40) {
            trainingData.push([1, 2, 1])
            testingData.push(1)
        } else {
            trainingData.push([2, 3, 2])
            testingData.push(2)
        }

    }

    var result = classifier.fit(trainingData);
    console.log(result);

    //final_classifier.logistics = classifier.logistics
    //final_classifier.classes   = classifier.classes

    console.log("%o classifier", classifier)
    var error = 0
    var predicted = classifier.transform([0, 2])
    console.log(predicted)

    saveClassifier(JSON.stringify(classifier))
}
//mainClassifier()

var classifier_model

function classifierGenerate(str_classifier) {
    //console.log(str_classifier)
    var json_model = JSON.parse(str_classifier)
    var model = JSON.parse(json_model[json_model.length - 1].model)
    //console.log("%o obj", model)


    for (var item in model.logistics) {
        var logistic_classifier = model.logistics[item]

        var new_logistic_classifier = new jsregression.LogisticRegression({
            alpha: model.alpha,
            iterations: model.iterations,
            lambda: model.lambda
        })

        new_logistic_classifier.dim = logistic_classifier.dim
        new_logistic_classifier.theta = logistic_classifier.theta

        model.logistics[item] = new_logistic_classifier
    }

    var classifier = new jsregression.MultiClassLogistic({
        alpha: model.alpha,
        iterations: model.iterations,
        lambda: model.lambda
    });
    classifier.classes = model.classes
    classifier.dim = model.dim
    classifier.logistics = model.logistics

    classifier_model = classifier
    //var predicted = classifier.transform(testdata)
    //console.log("data %o",predicted)
    //showforecast(predicted)
}

function testClassifier(testdata) {
    var predicted = classifier_model.transform(testdata)
    predicted = predicted.sort(compare)
    return predicted
}

function compare(a, b) {
    if (a.data > b.data)
        return -1;
    if (a.data < b.data)
        return 1;
    return 0;
}

/* 
function generateClassifierFromDataSetWithSetting(dataset, classifier_setting, func_callback) {
    console.log(classifier_setting)
    console.log(dataset)
    var classifier = new jsregression.MultiClassLogistic({
        alpha: Number(classifier_setting.alpha),
        iterations: Number(classifier_setting.iterations),
        lambda: Number(classifier_setting.lambda)
    });

    var result = classifier.fit(dataset);
    console.log(result);

    classifier_model = classifier
    console.log(classifier)
    saveClassifier(JSON.stringify(classifier), func_callback)
} */


function generateClassifierFromDataSet(dataset) {
    console.log(dataset[0])
    var classifier = new jsregression.MultiClassLogistic({
        alpha: 0.005,
        iterations: 100,
        lambda: 0.0
    });

    var trainingData = [];
    var testingData = [];

    dataset.forEach(element => {
        var date = element.date.split("_")

        trainingData.push([Number(date[0]),
            Number(date[1]),
            Number(date[2]),
            Number(element.cause),
            Number(element.alarm_level),
            Number(element.temperature),
            Number(element.establishment_type),
            Number(element.district)
        ])
    });
    /*
    for (var i = 0; i<100; i++){
        let element = dataset[i]
        trainingData.push([ element.date, 
            element.cause,
            element.alarm_level,
            element.temperature,
            element.establishment_type,
            element.district
        ])
    }*/
    var result = classifier.fit(trainingData);
    console.log(result);

    //final_classifier.logistics = classifier.logistics
    //final_classifier.classes   = classifier.classes

    console.log("%o classifier", classifier)
    var error = 0
    let testdata = dataset[Math.floor((Math.random() * dataset.length))]
    var date = testdata.date.split("_")
    let testelement = [
        Number(date[0]),
        Number(date[1]),
        Number(date[2]),
        Number(testdata.cause),
        Number(testdata.alarm_level),
        Number(testdata.temperature),
        Number(testdata.establishment_type)
    ]
    console.log("test element %o", testelement)
    var predicted = classifier.transform(testelement)
    console.log(predicted)

    saveClassifier(JSON.stringify(classifier), classifierSaved)

}

function classifierSaved() {
    alert("trained classifier saved")
    //location.reload();
}