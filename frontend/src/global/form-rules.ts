import i18n from '@/lang';
import { FormItemRule } from 'element-plus';

const checkIp = (rule: any, value: any, callback: any) => {
    if (value === '' || typeof value === 'undefined' || value == null) {
        callback(new Error(i18n.global.t('commons.rule.requiredInput')));
    } else {
        const reg =
            /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if (!reg.test(value) && value !== '') {
            callback(new Error(i18n.global.t('commons.rule.ip')));
        } else {
            callback();
        }
    }
};

const complexityPassword = (rule: any, value: any, callback: any) => {
    if (value === '' || typeof value === 'undefined' || value == null) {
        callback(new Error(i18n.global.t('commons.rule.complexityPassword')));
    } else {
        const reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*.])[\da-zA-Z~!@#$%^&*.]{8,}$/;
        if (!reg.test(value) && value !== '') {
            callback(new Error(i18n.global.t('commons.rule.complexityPassword')));
        } else {
            callback();
        }
    }
};

const checkName = (rule: any, value: any, callback: any) => {
    if (value === '' || typeof value === 'undefined' || value == null) {
        callback(new Error(i18n.global.t('commons.rule.commonName')));
    } else {
        const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{1}[a-zA-Z0-9_.\u4e00-\u9fa5-]{0,30}$/;
        if (!reg.test(value) && value !== '') {
            callback(new Error(i18n.global.t('commons.rule.commonName')));
        } else {
            callback();
        }
    }
};

interface CommonRule {
    requiredInput: FormItemRule;
    requiredSelect: FormItemRule;
    name: FormItemRule;
    password: FormItemRule;
    email: FormItemRule;
    number: FormItemRule;
    ip: FormItemRule;
    port: FormItemRule;
}

export const Rules: CommonRule = {
    requiredInput: {
        required: true,
        message: i18n.global.t('commons.rule.requiredInput'),
        trigger: 'blur',
    },
    requiredSelect: {
        required: true,
        message: i18n.global.t('commons.rule.requiredSelect'),
        trigger: 'change',
    },
    name: {
        required: true,
        validator: checkName,
        trigger: 'blur',
    },
    password: {
        validator: complexityPassword,
        trigger: 'blur',
    },
    email: {
        required: true,
        type: 'email',
        message: i18n.global.t('commons.rule.email'),
        trigger: 'blur',
    },
    number: {
        required: true,
        trigger: 'blur',
        min: 0,
        type: 'number',
        message: i18n.global.t('commons.rule.number'),
    },
    ip: {
        validator: checkIp,
        required: true,
        trigger: 'blur',
    },
    port: {
        required: true,
        trigger: 'blur',
        min: 1,
        max: 65535,
        type: 'number',
        message: i18n.global.t('commons.rule.port'),
    },
};