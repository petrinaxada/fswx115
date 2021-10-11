var api = {
        "response_code": 0,
        "results": [
            {
                "category": "Entertainment: Music",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which famous rapper is featured in Jack &Uuml; (Skrillex and Diplo)&#039;s 2015 single called &quot;Febreze&quot;?",
                "correct_answer": "2 Chainz",
                "incorrect_answers": [
                    "Kendrick Lamar",
                    "Future",
                    "Fatman Scoop"
                ]
            },
            {
                "category": "Science: Mathematics",
                "type": "boolean",
                "difficulty": "medium",
                "question": "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
                "correct_answer": "True",
                "incorrect_answers": [
                    "False"
                ]
            },
            {
                "category": "Entertainment: Video Games",
                "type": "multiple",
                "difficulty": "medium",
                "question": "In what year were achivements added to Steam?",
                "correct_answer": "2007",
                "incorrect_answers": [
                    "2008",
                    "2009",
                    "2006"
                ]
            },
            {
                "category": "Sports",
                "type": "multiple",
                "difficulty": "hard",
                "question": "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
                "correct_answer": "Pelle",
                "incorrect_answers": [
                    "Insigne",
                    "Barzagli",
                    "Giaccherini"
                ]
            },
            {
                "category": "History",
                "type": "multiple",
                "difficulty": "medium",
                "question": "When did Norway become free from Sweden?",
                "correct_answer": "1905",
                "incorrect_answers": [
                    "1925",
                    "1814",
                    "1834"
                ]
            },
            {
                "category": "Sports",
                "type": "multiple",
                "difficulty": "easy",
                "question": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
                "correct_answer": "Don Cherry",
                "incorrect_answers": [
                    "Don McKellar",
                    "Don Taylor ",
                    "Donald Sutherland"
                ]
            },
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Broome is a town in which state of Australia?",
                "correct_answer": "Western Australia",
                "incorrect_answers": [
                    "Northern Territory",
                    "South Australia",
                    "Tasmania"
                ]
            },
            {
                "category": "General Knowledge",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Apple co-founder Steve Jobs died from complications of which form of cancer?",
                "correct_answer": "Pancreatic",
                "incorrect_answers": [
                    "Bone",
                    "Liver",
                    "Stomach"
                ]
            },
            {
                "category": "General Knowledge",
                "type": "boolean",
                "difficulty": "easy",
                "question": "Slovakia is a member of European Union-",
                "correct_answer": "True",
                "incorrect_answers": [
                    "False"
                ]
            },
            {
                "category": "Mythology",
                "type": "multiple",
                "difficulty": "hard",
                "question": "Who is a minor god that is protector and creator of various arts, such as cheese making and bee keeping.",
                "correct_answer": "Aristaeus",
                "incorrect_answers": [
                    "Autonoe",
                    "Carme",
                    "Cephisso"
                ]
            }
        ]
    }

var display = document.querySelector("#newApi")
var newList = document.querySelector('#newList')
api.results.forEach(function(element, i){
    let newElement = document.createElement("li");
    newElement.textContent = `${api.results[i].category}`;
    newList.appendChild(newElement);
});

