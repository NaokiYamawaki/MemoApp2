import { format } from 'date-fns';

export function dateToString(date){
    if (!date){
        return '';
    }
    return format(date, 'yyyy年M月d日 HH時mm分');
    
}

export function translateErrors(code){
    const error = { title: 'エラー', description: '時間をおいてお試しください' };
    switch (code){
        case 'auth/invalid-email':
            error.description = 'メールアドレスが不正でう';
            break;
        case 'auth/user-diaabled':
            error.description = 'アカウントが不幸です';
            break;
        case 'auth/user-not-found':
            error.description = 'ユーザーが見つかりませんで';
           break;
        case 'auth/wrong-password':
            error.description = 'パスワード違う';
            break;
        case 'auth/email-already-in-use':
            error.description = 'メールアドレスがすて゛に使わテれいます';
            break;
 
        case 'auth/operation-not-allowed':
            error.description = '禁忌に触れたな';
            break;
        case 'auth/weak-password':
            error.description = 'パスワードが簡単すぎる';
            break;
        default:
    }
    return error;
}
