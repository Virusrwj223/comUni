accounts = Account.create([
    {
        name: "Hrishiraj"
    },
    {
        name: "Mandal"
    }
])

textbooks = Textbook.create([
    {
        isbn:"aab123",
        name:"University Physics with Modern Physics",
        chapters:8
    },
    {
        isbn:"acb129",
        name:"Thomas Calculus 5th Edition",
        chapters:12
    }
])

questions = Question.create([
    {
        textbook: textbooks.first,
        chapter: 1,
        questionHead: "Last book that made you cry",
        questionBlurb: "Let us know which was the best/worst/most painful book you ever read. Guess which one's mine",
        account: accounts.first
    },
    {
        textbook: textbooks.first,
        chapter: 4,
        questionHead: "So the world is just strings",
        questionBlurb: "How strange is that",
        account: accounts.first
    },
])

discussions = Discussion.create([
    {
        textbook: textbooks.first,
        question: questions.first,
        account: accounts.first,
        response: "Organic Chemistry by Dr Toh"
    }
])
