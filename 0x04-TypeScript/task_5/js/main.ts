interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

type sumCreditType<T> = (s1: T, s2: T) =>  number;

const sumMajorCredits: sumCreditType<MajorCredits> = (subject1, subject2): number => {
    return subject1.credits + subject2.credits
}

const sumMinorCredits: sumCreditType<MinorCredits> = (subject1, subject2): number => {
    return subject1.credits + subject2.credits
}
