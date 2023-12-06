function translateEnglish() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = 'Username';
        document.getElementById('passwordId').placeholder = 'Password';
        document.getElementById('autoLoginLanguageId').innerHTML = 'Auto log in';
        document.getElementById('logInBtnId').innerHTML = 'Log in';
        document.getElementById('regBtnId').innerHTML = 'Register';
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = 'Set standard buttons';
        document.getElementById('confirmInputTranslateId').innerHTML = 'Confirm';
        document.getElementById('deleteCategoryTranslateId').innerHTML = 'Delete';
        document.getElementById('saveCategoryTranslateId').innerHTML = 'Save category';
        document.getElementById('addNewCategoryTranslateId').innerHTML = 'Add new element';
        document.getElementById('startBtnId').innerHTML = 'Start';
        document.getElementById('pauseBtnId').innerHTML = 'Pause';
        document.getElementById('resetBtnId').innerHTML = 'Reset';
        document.getElementById('preAlertTranslateId').innerHTML = 'Pre alert [sec]';
        document.getElementById('gymDiaryTitleId').innerHTML = 'Gym diary';
        document.getElementById('alertEveryMinTranslateId').innerHTML = 'Alert every [min]';
        document.getElementById('welcomeMessageTranslateId').innerHTML = 'Welcome';
        document.getElementById('firstIntervalBtnId').innerHTML = 'Off';
        document.getElementById('preOffIntervalBtnId').innerHTML = 'Off';
        document.getElementById('requiresAlertTimeId').innerHTML = 'Requires alert time selection';
        document.getElementById('manualTitleId').innerHTML = 'Manual';
        document.getElementById('settingstitleId').innerHTML = 'Settings';
        document.getElementById('updatesTitleId').innerHTML = 'Updates';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = 'Save or delete last diary element first';
        document.getElementById('emptyDiaryTranslateId').innerHTML = 'Add diary in settings...';
        document.getElementById('notSavedWarningTranslateId').innerHTML = 'Newest diary element has not yet been saved';
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = 'Newest diary element has not yet been saved';
        document.getElementById('cancelBtnId').innerHTML = 'Cancel';
        document.getElementById('cancelBtnSettingsId').innerHTML = 'Cancel';
        document.getElementById('continueBtnId').innerHTML = 'Continue';
        document.getElementById('continueBtnSettingsId').innerHTML = 'Continue';
        document.getElementById('dateTodayTranslateId').innerHTML = `Insert today's date`;
        document.getElementById('addLastWeightTranslateId').innerHTML = 'Adopt info from previous entry';
        document.getElementById('downloadTranslateId').innerHTML = 'Download gym diary as text file';
    }
    languageArray = [];
    languageArray.push('english');
    saveLanguage();
}

function translateGerman() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = 'Anmeldename';
        document.getElementById('passwordId').placeholder = 'Passwort';
        document.getElementById('autoLoginLanguageId').innerHTML = 'Automatisch anmelden';
        document.getElementById('logInBtnId').innerHTML = 'Anmelden';
        document.getElementById('regBtnId').innerHTML = 'Registrieren';
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = 'Wähle Standard-Buttons';
        document.getElementById('confirmInputTranslateId').innerHTML = 'Bestätige Eingabe';
        document.getElementById('deleteCategoryTranslateId').innerHTML = 'Lösche Kategorie';
        document.getElementById('saveCategoryTranslateId').innerHTML = 'Speichere Kategorie';
        document.getElementById('addNewCategoryTranslateId').innerHTML = 'Neues Element hinzufügen';
        document.getElementById('startBtnId').innerHTML = 'Start';
        document.getElementById('pauseBtnId').innerHTML = 'Pause';
        document.getElementById('resetBtnId').innerHTML = 'Neu';
        document.getElementById('preAlertTranslateId').innerHTML = 'Vorabalarm [Sek]';
        document.getElementById('gymDiaryTitleId').innerHTML = 'Fitnesstagebuch';
        document.getElementById('alertEveryMinTranslateId').innerHTML = 'Alarm alle [Min]';
        document.getElementById('welcomeMessageTranslateId').innerHTML = 'Willkommen';
        document.getElementById('firstIntervalBtnId').innerHTML = 'Aus';
        document.getElementById('preOffIntervalBtnId').innerHTML = 'Aus';
        document.getElementById('requiresAlertTimeId').innerHTML = 'Alarmzeit wird benötigt';
        document.getElementById('manualTitleId').innerHTML = 'Anleitung';
        document.getElementById('settingstitleId').innerHTML = 'Einstellungen';
        document.getElementById('updatesTitleId').innerHTML = 'Aktualisierungen';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = 'Speichere oder lösche das letzte Tagebuchelement';
        document.getElementById('emptyDiaryTranslateId').innerHTML = 'Füge ein Tagebuch in den Einstellungen hinzu...';
        document.getElementById('notSavedWarningTranslateId').innerHTML = 'Neuestes Tagebuchelement wurde noch nicht gespeichert';
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = 'Neuestes Tagebuchelement wurde noch nicht gespeichert';
        document.getElementById('cancelBtnId').innerHTML = 'Abbrechen';
        document.getElementById('cancelBtnSettingsId').innerHTML = 'Abbrechen';
        document.getElementById('continueBtnId').innerHTML = 'Weiter';
        document.getElementById('continueBtnSettingsId').innerHTML = 'Weiter';
        document.getElementById('dateTodayTranslateId').innerHTML = `Fügt heutiges Datum ein`;
        document.getElementById('addLastWeightTranslateId').innerHTML = 'Info vom vorherigen Eintrag übernehmen';
        document.getElementById('downloadTranslateId').innerHTML = 'Fitness-Tagebuch als Textdatei herunterladen';
    }
    languageArray = [];
    languageArray.push('german');
    saveLanguage();
}

function translateSerbian() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = 'Имя пользователя';
        document.getElementById('passwordId').placeholder = 'Пароль';
        document.getElementById('autoLoginLanguageId').innerHTML = 'Автоматический вход';
        document.getElementById('logInBtnId').innerHTML = 'Войти';
        document.getElementById('regBtnId').innerHTML = 'Регистрация';
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = 'Постави стандардна дугмад';
        document.getElementById('confirmInputTranslateId').innerHTML = 'Потврди унос';
        document.getElementById('deleteCategoryTranslateId').innerHTML = 'Избриши категорију';
        document.getElementById('saveCategoryTranslateId').innerHTML = 'Сачувај категорију';
        document.getElementById('addNewCategoryTranslateId').innerHTML = 'Добавить новый элемент';
        document.getElementById('startBtnId').innerHTML = 'Почетак';
        document.getElementById('pauseBtnId').innerHTML = 'Пауза';
        document.getElementById('resetBtnId').innerHTML = 'Ресетуј';
        document.getElementById('preAlertTranslateId').innerHTML = 'Унапред упозорење [с]';
        document.getElementById('gymDiaryTitleId').innerHTML = 'Фитнес дневник';
        document.getElementById('alertEveryMinTranslateId').innerHTML = 'Упозорење сваких [мин]';
        document.getElementById('welcomeMessageTranslateId').innerHTML = 'Добродошли';
        document.getElementById('firstIntervalBtnId').innerHTML = 'Искључи';
        document.getElementById('preOffIntervalBtnId').innerHTML = 'Искључи';
        document.getElementById('requiresAlertTimeId').innerHTML = 'Потребно је време за упозорење';
        document.getElementById('manualTitleId').innerHTML = 'Упутство';
        document.getElementById('settingstitleId').innerHTML = 'Подешавања';
        document.getElementById('updatesTitleId').innerHTML = 'Обнове';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = 'Сохраните или удалите последний элемент дневника сначала';
        document.getElementById('emptyDiaryTranslateId').innerHTML = 'Добавете дневник в настройките...';
        document.getElementById('notSavedWarningTranslateId').innerHTML = 'Најновији елемент дневника још увек није сачуван';
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = 'Најновији елемент дневника још увек није сачуван';
        document.getElementById('cancelBtnId').innerHTML = 'Откажи';
        document.getElementById('cancelBtnSettingsId').innerHTML = 'Откажи';
        document.getElementById('continueBtnId').innerHTML = 'Настави';
        document.getElementById('continueBtnSettingsId').innerHTML = 'Настави';
        document.getElementById('dateTodayTranslateId').innerHTML = `Фүгт хеутигес Датум еин`;
        document.getElementById('addLastWeightTranslateId').innerHTML = 'Инфо вом ворхериген Еинтраг ӱбернэхмэн';
        document.getElementById('downloadTranslateId').innerHTML = 'Фитнесс-Тагебуч алс Тэкстдатеи херунтерладен';
    }
    languageArray = [];
    languageArray.push('serbian');
    saveLanguage();
}

function translateMarokko() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = 'اسم المستخدم';
        document.getElementById('passwordId').placeholder = 'كلمة المرور';
        document.getElementById('autoLoginLanguageId').innerHTML = 'تسجيل الدخول التلقائي';
        document.getElementById('logInBtnId').innerHTML = 'تسجيل الدخول';
        document.getElementById('regBtnId').innerHTML = 'التسجيل';
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = 'وضع الأزرار القياسية';
        document.getElementById('confirmInputTranslateId').innerHTML = 'تأكيد الإدخال';
        document.getElementById('deleteCategoryTranslateId').innerHTML = 'حذف الفئة';
        document.getElementById('saveCategoryTranslateId').innerHTML = 'حفظ الفئة';
        document.getElementById('addNewCategoryTranslateId').innerHTML = 'إضافة عنصر جديد';
        document.getElementById('startBtnId').innerHTML = 'ابدأ';
        document.getElementById('pauseBtnId').innerHTML = 'توقف';
        document.getElementById('resetBtnId').innerHTML = 'إعادة تعيين';
        document.getElementById('preAlertTranslateId').innerHTML = 'تنبيه مسبق [ثانية]';
        document.getElementById('gymDiaryTitleId').innerHTML = 'يوميات النادي الرياضي';
        document.getElementById('alertEveryMinTranslateId').innerHTML = 'تنبيه كل [دقيقة]';
        document.getElementById('welcomeMessageTranslateId').innerHTML = 'أهلاً وسهلاً';
        document.getElementById('firstIntervalBtnId').innerHTML = 'إيقاف';
        document.getElementById('preOffIntervalBtnId').innerHTML = 'إيقاف';
        document.getElementById('requiresAlertTimeId').innerHTML = 'يتطلب اختيار وقت التنبيه';
        document.getElementById('manualTitleId').innerHTML = 'دليل';
        document.getElementById('settingstitleId').innerHTML = 'الإعدادات';
        document.getElementById('updatesTitleId').innerHTML = 'تحديثات';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = 'احفظ أو احذف العنصر الأخير في اليومية أولاً.';
        document.getElementById('emptyDiaryTranslateId').innerHTML = 'زيدو اليوميات فالإعدادات';
        document.getElementById('notSavedWarningTranslateId').innerHTML = 'لم يتم حفظ أحدث عنصر في اليومية بعد';
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = 'لم يتم حفظ أحدث عنصر في اليومية بعد';
        document.getElementById('cancelBtnId').innerHTML = 'إلغاء';
        document.getElementById('cancelBtnSettingsId').innerHTML = 'إلغاء';
        document.getElementById('continueBtnId').innerHTML = 'متابعة';
        document.getElementById('continueBtnSettingsId').innerHTML = 'متابعة';
        document.getElementById('dateTodayTranslateId').innerHTML = `أدخل تاريخ اليوم`;
        document.getElementById('addLastWeightTranslateId').innerHTML = 'اعتماد معلومات من الإدخال السابق';
        document.getElementById('downloadTranslateId').innerHTML = 'تنزيل يوميات اللياقة كملف نصي';

    }
    languageArray = [];
    languageArray.push('marokko');
    saveLanguage();
}

function translateChina() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = '用户名';
        document.getElementById('passwordId').placeholder = '密码';
        document.getElementById('autoLoginLanguageId').innerHTML = '自动登录';
        document.getElementById('logInBtnId').innerHTML = '登录';
        document.getElementById('regBtnId').innerHTML = '注册';
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = '设置标准按钮';
        document.getElementById('confirmInputTranslateId').innerHTML = '确认输入';
        document.getElementById('deleteCategoryTranslateId').innerHTML = '删除类别';
        document.getElementById('saveCategoryTranslateId').innerHTML = '保存类别';
        document.getElementById('addNewCategoryTranslateId').innerHTML = '添加新元素';
        document.getElementById('startBtnId').innerHTML = '开始';
        document.getElementById('pauseBtnId').innerHTML = '暂停';
        document.getElementById('resetBtnId').innerHTML = '重置';
        document.getElementById('preAlertTranslateId').innerHTML = '预警 [秒]';
        document.getElementById('gymDiaryTitleId').innerHTML = '健身日记';
        document.getElementById('alertEveryMinTranslateId').innerHTML = '每 [分钟] 提醒';
        document.getElementById('welcomeMessageTranslateId').innerHTML = '欢迎';
        document.getElementById('firstIntervalBtnId').innerHTML = '关闭';
        document.getElementById('preOffIntervalBtnId').innerHTML = '关闭';
        document.getElementById('requiresAlertTimeId').innerHTML = '需要选择提醒时间';
        document.getElementById('manualTitleId').innerHTML = '手动';
        document.getElementById('settingstitleId').innerHTML = '设置';
        document.getElementById('updatesTitleId').innerHTML = '更新';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = '先保存或删除最后的日记元素';
        document.getElementById('emptyDiaryTranslateId').innerHTML = '在设置中添加日记';
        document.getElementById('notSavedWarningTranslateId').innerHTML = '最新的日记元素尚未保存';
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = '最新的日记元素尚未保存';
        document.getElementById('cancelBtnId').innerHTML = '取消';
        document.getElementById('cancelBtnSettingsId').innerHTML = '取消';
        document.getElementById('continueBtnId').innerHTML = '继续';
        document.getElementById('continueBtnSettingsId').innerHTML = '继续';
        document.getElementById('dateTodayTranslateId').innerHTML = `插入今天的日期`;
        document.getElementById('addLastWeightTranslateId').innerHTML = '采用上一条记录的信息';
        document.getElementById('downloadTranslateId').innerHTML = '下载健身日记为文本文件';

    }
    languageArray = [];
    languageArray.push('china');
    saveLanguage();
}

function translateSpain() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = 'Nombre de usuario';
        document.getElementById('passwordId').placeholder = 'Contraseña';
        document.getElementById('autoLoginLanguageId').innerHTML = 'Inicio de sesión automático';
        document.getElementById('logInBtnId').innerHTML = 'Iniciar sesión';
        document.getElementById('regBtnId').innerHTML = 'Registrarse';
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = 'Configurar botones estándar';
        document.getElementById('confirmInputTranslateId').innerHTML = 'Confirmar entrada';
        document.getElementById('deleteCategoryTranslateId').innerHTML = 'Eliminar categoría';
        document.getElementById('saveCategoryTranslateId').innerHTML = 'Guardar categoría';
        document.getElementById('addNewCategoryTranslateId').innerHTML = 'Agregar nuevo elemento';
        document.getElementById('startBtnId').innerHTML = 'Inicio';
        document.getElementById('pauseBtnId').innerHTML = 'Pausa';
        document.getElementById('resetBtnId').innerHTML = 'Restablecer';
        document.getElementById('preAlertTranslateId').innerHTML = 'Prealarma [seg]';
        document.getElementById('gymDiaryTitleId').innerHTML = 'Diario de gimnasio';
        document.getElementById('alertEveryMinTranslateId').innerHTML = 'Alerta cada [min]';
        document.getElementById('welcomeMessageTranslateId').innerHTML = 'Bienvenido';
        document.getElementById('firstIntervalBtnId').innerHTML = 'Apagar';
        document.getElementById('preOffIntervalBtnId').innerHTML = 'Apagar';
        document.getElementById('requiresAlertTimeId').innerHTML = 'Requiere selección de tiempo de alerta';
        document.getElementById('manualTitleId').innerHTML = 'Instrucciones';
        document.getElementById('settingstitleId').innerHTML = 'Configuración';
        document.getElementById('updatesTitleId').innerHTML = 'Actualizaciones';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = 'Guardar o eliminar primero el último elemento del diario';
        document.getElementById('emptyDiaryTranslateId').innerHTML = 'Agregar diario en configuraciones...';
        document.getElementById('notSavedWarningTranslateId').innerHTML = 'El elemento más reciente del diario aún no se ha guardado';
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = 'El elemento más reciente del diario aún no se ha guardado';
        document.getElementById('cancelBtnId').innerHTML = 'Cancelar';
        document.getElementById('cancelBtnSettingsId').innerHTML = 'Cancelar';
        document.getElementById('continueBtnId').innerHTML = 'Continuar';
        document.getElementById('continueBtnSettingsId').innerHTML = 'Continuar';
        document.getElementById('dateTodayTranslateId').innerHTML = `Insertar la fecha de hoy`;
        document.getElementById('addLastWeightTranslateId').innerHTML = 'Adoptar información del registro anterior';
        document.getElementById('downloadTranslateId').innerHTML = 'Descargar diario de gimnasio como archivo de texto';

    }
    languageArray = [];
    languageArray.push('spain');
    saveLanguage();
}


function translateBavaria() {
    if (document.title === 'Simple Fit - Log in') {
        document.getElementById('usernameId').placeholder = `B'nutzername`;
        document.getElementById('passwordId').placeholder = `G'heimzahl`;
        document.getElementById('autoLoginLanguageId').innerHTML = 'Automatischer Oanzogg';
        document.getElementById('logInBtnId').innerHTML = `O'g'meldt`;
        document.getElementById('regBtnId').innerHTML = `Registr'rn`;
    } else {
        document.getElementById('setStandardBtnsTranslateId').innerHTML = 'Standard-Knöpfe a weng aussucha';
        document.getElementById('confirmInputTranslateId').innerHTML = 'Oiso, des passt so';
        document.getElementById('deleteCategoryTranslateId').innerHTML = 'Pack des Zeig weg';
        document.getElementById('saveCategoryTranslateId').innerHTML = 'Speicher den Schmarrn';
        document.getElementById('addNewCategoryTranslateId').innerHTML = 'Hau a neis Element nei';
        document.getElementById('startBtnId').innerHTML = 'Geh los';
        document.getElementById('pauseBtnId').innerHTML = 'Hoid an';
        document.getElementById('resetBtnId').innerHTML = 'Nai';
        document.getElementById('preAlertTranslateId').innerHTML = 'Scho vorher [Sek]';
        document.getElementById('gymDiaryTitleId').innerHTML = 'Gymnastikheft';
        document.getElementById('alertEveryMinTranslateId').innerHTML = 'Alarm olle [Min]';
        document.getElementById('welcomeMessageTranslateId').innerHTML = 'Griaß di';
        document.getElementById('firstIntervalBtnId').innerHTML = 'Aus';
        document.getElementById('preOffIntervalBtnId').innerHTML = 'Aus';
        document.getElementById('requiresAlertTimeId').innerHTML = 'Benötigt a Zeit fürn Alarm';
        document.getElementById('manualTitleId').innerHTML = 'Leitfodn';
        document.getElementById('settingstitleId').innerHTML = 'G’fummel';
        document.getElementById('updatesTitleId').innerHTML = 'Neier Firlefanz';
        document.getElementById('saveDeleteLastDiaryElementTranslateId').innerHTML = `Speicher oda lösch z'erst 's dei letzte Schmarrnübung`;
        document.getElementById('emptyDiaryTranslateId').innerHTML = 'Füg a Gymnastikheft in de Einstellungen hi...';
        document.getElementById('notSavedWarningTranslateId').innerHTML = `Des neie Togbuachelement is no ned g'speichert`;
        document.getElementById('notSavedWarningSettingsTranslateId').innerHTML = `Des neie Togbuachelement is no ned g'speichert`;
        document.getElementById('cancelBtnId').innerHTML = `Brems'n`;
        document.getElementById('cancelBtnSettingsId').innerHTML = `Brems'n`;
        document.getElementById('continueBtnId').innerHTML = 'Weitermacha';
        document.getElementById('continueBtnSettingsId').innerHTML = 'Weitermacha';
        document.getElementById('dateTodayTranslateId').innerHTML = `Heid is:`;
        document.getElementById('addLastWeightTranslateId').innerHTML = 'Nimm de Infos vom vorigen Eintrag her';
        document.getElementById('downloadTranslateId').innerHTML = 'Lad des Gymnastikheft ois Textdatei oba';

    }
    languageArray = [];
    languageArray.push('bavaria');
    saveLanguage();
}