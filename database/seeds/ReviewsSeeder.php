<?php

use Illuminate\Database\Seeder;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $reviewsData = [
            [
                'slug' => 'p_512719',
                'name' => 'Виктория Власева',
                'nick' => 'Gosti_tyt',
                'content_ru' => 'Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#p_512719',
                'link_to_profile' => 'https://www.fl.ru/users/Gosti_tyt/',
                'link_to_project' => 'https://www.fl.ru/bezopasnaya-sdelka/?id=99258',
                'published_at' => '14.09.2013 в 14:54',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'p_487787',
                'name' => 'Виктория Власева',
                'nick' => 'Gosti_tyt',
                'content_ru' => 'Спасибо за сотрудничество! Надежный и грамотный специалист.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#p_487787',
                'link_to_profile' => 'https://www.fl.ru/users/Gosti_tyt/',
                'link_to_project' => 'https://www.fl.ru/bezopasnaya-sdelka/?id=97128',
                'published_at' => '23.08.2013 в 14:58',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'p_483215',
                'name' => 'Виктория Власева',
                'nick' => 'Gosti_tyt',
                'content_ru' => 'Замечательный специалист, работа сделана даже раньше срока и качественно. <br>  
Ставлю большой + и работаю дальше.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#p_483215',
                'link_to_profile' => 'https://www.fl.ru/users/Gosti_tyt/',
                'link_to_project' => 'https://www.fl.ru/bezopasnaya-sdelka/?id=97023',
                'published_at' => '19.08.2013 в 18:43',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_986653',
                'name' => 'Игорь Варенников',
                'nick' => 'Igor_Varennikov',
                'content_ru' => 'Петр очень приятный, грамотный специалист. К сожалению наше сотрудничество закончилось не успев толком начаться, но осталось очень приятное впечатление. Если понадобится что то по Modx буду обращаться.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_986653',
                'link_to_profile' => 'https://www.fl.ru/users/Igor_Varennikov/',
                'link_to_project' => '',
                'published_at' => '08.02.2012 в 22:59',
                'avatar' => 'database/seeds/images/avatars/sm_f_506b359b77757.jpg',
            ],



            [
                'slug' => 'o_693422',
                'name' => 'Ideas-is-power Ideas',
                'nick' => 'leidea',
                'content_ru' => 'Петр отличный специалист. Выполнили очень сложный проект на Modx с созданием настраиваемого расписания занятий. К работе относится очень внимательно, выполняет всю работу до конца. Очень доволен. Будем работать дальше.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_693422',
                'link_to_profile' => 'https://www.fl.ru/users/leidea',
                'link_to_project' => '',
                'published_at' => '08.12.2010 в 19:52',
                'avatar' => 'database/seeds/images/avatars/sm_f_4a393b7930b09.gif',
            ],
            [
                'slug' => 'o_654481',
                'name' => 'roman som',
                'nick' => 'r-startsev',
                'content_ru' => 'Петр готовил сайт под ключ для нашей компании. Показал себя очень ответственным, и сделал сайт таким каким мы его хотели видеть. Работой доволен – буду обращаться еще.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_654481',
                'link_to_profile' => 'https://www.fl.ru/users/r-startsev/',
                'link_to_project' => '',
                'published_at' => '16.10.2010 в 22:38',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_634582',
                'name' => 'Людмила Кузьмина',
                'nick' => 'ole108',
                'content_ru' => 'Заказывали технический аудит сайта (анализ пригодности для продвижения в поисковых системах), поиск причин ошибок и их устранение. Работой довольны: оперативно, профессионально и грамотно. Продолжаем сотрудничество.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_634582',
                'link_to_profile' => 'https://www.fl.ru/users/ole108/',
                'link_to_project' => '',
                'published_at' => '14.09.2010 в 12:01',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_628902',
                'name' => 'Andrey Medvedev',
                'nick' => 'usremont',
                'content_ru' => 'Поработали с Петром!!! )))<br> 
Нужен был парсер для сайта под MODx, скрипт который на основе тхт файла наполняет сайт статьями и заполняет поля кейвордов дискрипшнов и всё такое.<br>
Всё сделано и даже всё работает)) Я очень доволен. )))<br> 
До Петра за эту работу брались ещё два человека и безрезультатно, а тут за два дня всё было выполнено (кстати как и договаривалис). <br>
Рекомендую, отличный программист!!!',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_628902',
                'link_to_profile' => 'https://www.fl.ru/users/usremont/',
                'link_to_project' => '',
                'published_at' => '04.09.2010 в 15:18',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_626365',
                'name' => 'Дмитрий Live',
                'nick' => 'open_your_eyes',
                'content_ru' => 'Сотрудничал, +',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_626365',
                'link_to_profile' => 'https://www.fl.ru/users/open_your_eyes/',
                'link_to_project' => '',
                'published_at' => '31.08.2010 в 08:30',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_611003',
                'name' => 'Ivan Bezfamilnyj',
                'nick' => 'Ruspath',
                'content_ru' => 'Брал консультацию, все ок.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_611003',
                'link_to_profile' => 'https://www.fl.ru/users/Ruspath/',
                'link_to_project' => '',
                'published_at' => '03.08.2010 в 21:07',
                'avatar' => 'database/seeds/images/avatars/sm_f_4d468237cd404.jpg',
            ],

            [
                'slug' => 'o_592516',
                'name' => 'Дмитрий Кипренский',
                'nick' => 'DmitryKeeper',
                'content_ru' => 'Петр – один из наиболее ответственных специалистов, с которыми приходилось работать. Также, судя по результатам работы, чрезвычайно грамотный программист. <br>
Конкретно по проекту был выполнен перенос сайта на систему управления MODx, написан дополнительный функционал к MODx, создан интерфейс на JQuery. Задачи были не из простых, но решены были достаточно качественно и оперативно, в процессе предлагались различные способы решения.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_592516',
                'link_to_profile' => 'https://www.fl.ru/users/DmitryKeeper/',
                'link_to_project' => '',
                'published_at' => '30.06.2010 в 20:31',
                'avatar' => 'database/seeds/images/avatars/sm_f_4b5b529bd88c2.jpg',
            ],
            [
                'slug' => 'o_586571',
                'name' => 'Sergey Ts',
                'nick' => 'nejik',
                'content_ru' => 'Очень замечательный и хороший человек. Так же очень хороший программист. Выручил и порядочно выполнил все поставленные цели, в установленные сроки. Цель была создание и доработка шаблона и самого движка Livestreet. Так же исправил все баги с модулями. Во время работы консультировал и давал советы. Проделанной работой очень доволен. Все на высшем уровне. Большое спасибо, буду заказывать еще. Рекомендую!',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_586571',
                'link_to_profile' => 'https://www.fl.ru/users/nejik/',
                'link_to_project' => '',
                'published_at' => '20.06.2010 в 14:28',
                'avatar' => 'database/seeds/images/avatars/sm_f_4b9bbda34dced.jpg',
            ],
            [
                'slug' => 'o_582584',
                'name' => 'Vladislav Bosch',
                'nick' => 'Rossmann',
                'content_ru' => 'Пётр справился с созданием сайта на отлично, хоть и является начинающим специалистом. Всё чётко, строго по ТЗ, аккуратно, доработки минимальные и выполнены максимально оперативно. Рекомендую, как надёжного и грамотного исполнителя.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_582584',
                'link_to_profile' => 'https://www.fl.ru/users/Rossmann/',
                'link_to_project' => '',
                'published_at' => '12.06.2010 в 22:53',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_352380',
                'name' => 'Mark Majorov',
                'nick' => 'sexleksaker',
                'content_ru' => 'Приятный человек, хороший PHP специалист. <br>
Грамотно и быстро выявил и исправил ошибки на моем сайте. <br>
Цена за выполненную работу была вполне приемлема. <br>
Рекомендую как довольный клиент.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_352380',
                'link_to_profile' => 'https://www.fl.ru/users/sexleksaker/',
                'link_to_project' => '',
                'published_at' => '10.03.2009 в 21:41',
                'avatar' => 'database/seeds/images/avatars/sm_f_497331582d172.jpg',
            ],
            [
                'slug' => 'o_335029',
                'name' => 'Владимир Иванов',
                'nick' => 'vlaspb',
                'content_ru' => 'Хороший грамотный специалист в своём деле. <br>
Быстро и грамотно разобрался в проблеме сервера и помог грамотно решить их <br>
С уважение Влад.',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_335029',
                'link_to_profile' => 'https://www.fl.ru/users/vlaspb/',
                'link_to_project' => '',
                'published_at' => '05.02.2009 в 22:53',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_328873',
                'name' => 'Андрей Макалкин',
                'nick' => 'STIMIK',
                'content_ru' => 'Очень понравилось как была выполнена работа, моментально настроил сервер, хотя многим это не удавалось, рекомендую всем этого фрилансера, буду и дальше работать с ним!',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_328873',
                'link_to_profile' => 'https://www.fl.ru/users/STIMIK/',
                'link_to_project' => '',
                'published_at' => '24.01.2009 в 03:52',
                'avatar' => 'database/seeds/images/avatars/sm_f_25557caeb903ff47.jpg',
            ],
            [
                'slug' => 'o_327774',
                'name' => 'Дмитрий Соловей',
                'nick' => 'DSolovey',
                'content_ru' => 'Быстро отозвался на проект, так же быстро приступил к выполнению задания. <br> 
Задача стояла в настройке VPS, нужно было установить apache, mysql,php. Так же установить и настроить панель управления. <br>
Много пояснять не пришлось, все схватывал на ходу!<br> 
Очень доволен работой, спасибо!',
                'content_en' => '',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_327774',
                'link_to_profile' => 'https://www.fl.ru/users/DSolovey/',
                'link_to_project' => '',
                'published_at' => '21.01.2009 в 22:36',
                'avatar' => 'database/seeds/images/avatars/sm_f_4735ab4580d46.jpg',
            ],
        ];

        $reviewsRootPage = App\Page::where('slug', 'reviews')->first();
        foreach ($reviewsData as $reviewData) {
            $url = array_shift($reviewData);
            $avatar = array_pop($reviewData);
            $page = App\Page::create(['slug' => str_replace('_', '-', $url)]);
//            $page->makeChildOf($reviewsRootPage);
            $reviewsRootPage->appendNode($page);
            $page->loadImage($avatar, ['alt_ru' => $reviewData['name'], 'sort_order_id' => 0]);
            $reviewData['published_at'] = \Carbon\Carbon::createFromFormat("d.m.Y в H:i", $reviewData['published_at']);
            $review = App\Review::create($reviewData);
            $review->page()->save($page);
        }
    }
}
