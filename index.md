---
layout: home
author_profile: true
title: "عمر حمزة | الشاعر الجديد"
excerpt: "أهلاً بك في فضاء القصيدة والكلمة"
---

<div class="home-actions-grid">
  
  {% assign categories_to_show = "قصائد,مقالات,خواطر,أرشيف" | split: "," %}
  
  {% for cat_name in categories_to_show %}
    {% comment %} حساب عدد المقالات آلياً لكل قسم {% endcomment %}
    {% assign cat_count = 0 %}
    {% for category in site.categories %}
      {% if category[0] == cat_name %}
        {% assign cat_count = category[1] | size %}
      {% endif %}
    {% endfor %}

    <a href="/categories/{{ cat_name | slugify: 'pretty' }}/" class="btn">
      <div class="btn-content">
        <span class="btn-label">{{ cat_name }}</span>
        <span class="btn-badge">{{ cat_count }}</span>
      </div>
    </a>
  {% endfor %}

</div>

<style>
  /* تنظيم الشبكة لضمان التناسق في صف واحد (أو زرين في الموبايل) */
  .home-actions-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 25px 0;
    justify-content: center;
  }

  /* جعل الأزرار تأخذ ستايل ملف main الخاص بك تلقائياً */
  .home-actions-grid .btn {
    flex: 1 1 calc(25% - 10px); /* 4 أزرار في الصف على الكمبيوتر */
    min-width: 130px;
    margin: 0 !important; /* لضمان عدم تداخل هوامش القالب مع ستايلك */
    padding: 12px 5px !important;
    text-align: center;
    text-decoration: none;
  }

  /* تنسيق المحتوى الداخلي للزر */
  .btn-content {
    display: flex;
    flex-direction: column; /* النص فوق الرقم لجمالية الموبايل */
    align-items: center;
    gap: 4px;
  }

  .btn-label {
    font-weight: bold;
    /* سيأخذ الخط واللون من ستايل الـ btn في ملف الماين */
  }

  .btn-badge {
    font-size: 0.75em;
    opacity: 0.6; /* شفافية خفيفة للرقم ليكون ثانوياً مقارنة بالنص */
    font-family: monospace; /* لمسة تقنية بسيطة للأرقام */
  }

  /* التجاوب مع الهاتف: زرين في كل صف */
  @media (max-width: 600px) {
    .home-actions-grid .btn {
      flex: 1 1 calc(50% - 10px);
      min-width: 110px;
    }
  }

  /* تأثير الضغط لتعزيز شعور "تطبيق الهاتف" */
  .home-actions-grid .btn:active {
    transform: translateY(2px);
    transition: 0.1s;
  }
</style>

---

### آخر المنشورات
