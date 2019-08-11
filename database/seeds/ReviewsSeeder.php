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
                'name_ru' => 'Виктория Власева',
                'name_en' => 'Viktoria Vlaseva',
                'nick' => 'Gosti_tyt',
                'content_ru' => 'Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.',
                'content_en' => 'I like to work with this developer - he does work quickly and clearly. We continue cooperation.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#p_512719',
                'link_to_profile' => 'https://www.fl.ru/users/Gosti_tyt/',
                'link_to_project' => 'https://www.fl.ru/bezopasnaya-sdelka/?id=99258',
                'published_at' => '14.09.2013 в 14:54',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'p_487787',
                'name_ru' => 'Виктория Власева',
                'name_en' => 'Viktoria Vlaseva',
                'nick' => 'Gosti_tyt',
                'content_ru' => 'Спасибо за сотрудничество! Надежный и грамотный специалист.',
                'content_en' => 'Thank you for your cooperation! Reliable and competent specialist.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#p_487787',
                'link_to_profile' => 'https://www.fl.ru/users/Gosti_tyt/',
                'link_to_project' => 'https://www.fl.ru/bezopasnaya-sdelka/?id=97128',
                'published_at' => '23.08.2013 в 14:58',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'p_483215',
                'name_ru' => 'Виктория Власева',
                'name_en' => 'Viktoria Vlaseva',
                'nick' => 'Gosti_tyt',
                'content_ru' => 'Замечательный специалист, работа сделана даже раньше срока и качественно. <br> Ставлю большой + и работаю дальше.',
                'content_en' => 'Wonderful specialist, the work was done even ahead of schedule and with high quality. <br> I put big + and work further.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#p_483215',
                'link_to_profile' => 'https://www.fl.ru/users/Gosti_tyt/',
                'link_to_project' => 'https://www.fl.ru/bezopasnaya-sdelka/?id=97023',
                'published_at' => '19.08.2013 в 18:43',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_986653',
                'name_ru' => 'Игорь Варенников',
                'name_en' => 'Igor Varennikov',
                'nick' => 'Igor_Varennikov',
                'content_ru' => 'Петр очень приятный, грамотный специалист. К сожалению наше сотрудничество закончилось не успев толком начаться, но осталось очень приятное впечатление. Если понадобится что то по Modx буду обращаться.',
                'content_en' => 'Peter is a very nice, competent specialist. Unfortunately, our cooperation ended before we could really begin, but a very good impression remained. If you need something for Modx I will contact.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_986653',
                'link_to_profile' => 'https://www.fl.ru/users/Igor_Varennikov/',
                'link_to_project' => '',
                'published_at' => '08.02.2012 в 22:59',
                'avatar' => 'database/seeds/images/avatars/sm_f_506b359b77757.jpg',
            ],



            [
                'slug' => 'o_693422',
                'name_ru' => 'Ideas-is-power Ideas',
                'name_en' => 'Ideas-is-power Ideas',
                'nick' => 'leidea',
                'content_ru' => 'Петр отличный специалист. Выполнили очень сложный проект на Modx с созданием настраиваемого расписания занятий. К работе относится очень внимательно, выполняет всю работу до конца. Очень доволен. Будем работать дальше.',
                'content_en' => 'Peter is an excellent specialist. We completed a very complex project on Modx with the creation of a custom class schedule. He is very attentive to work, he does all the work to the end. Very satisfied. We will continue to work.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_693422',
                'link_to_profile' => 'https://www.fl.ru/users/leidea',
                'link_to_project' => '',
                'published_at' => '08.12.2010 в 19:52',
                'avatar' => 'database/seeds/images/avatars/sm_f_4a393b7930b09.gif',
            ],
            [
                'slug' => 'o_654481',
                'name_ru' => 'roman som',
                'name_en' => 'roman som',
                'nick' => 'r-startsev',
                'content_ru' => 'Петр готовил сайт под ключ для нашей компании. Показал себя очень ответственным, и сделал сайт таким каким мы его хотели видеть. Работой доволен – буду обращаться еще.',
                'content_en' => 'Peter was preparing a turnkey website for our company. He proved to be very responsible, and made the site the way we wanted to see it. Pleased with the work - I will contact you again.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_654481',
                'link_to_profile' => 'https://www.fl.ru/users/r-startsev/',
                'link_to_project' => '',
                'published_at' => '16.10.2010 в 22:38',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_634582',
                'name_ru' => 'Людмила Кузьмина',
                'name_en' => 'Lyudmila Kuzmina',
                'nick' => 'ole108',
                'content_ru' => 'Заказывали технический аудит сайта (анализ пригодности для продвижения в поисковых системах), поиск причин ошибок и их устранение. Работой довольны: оперативно, профессионально и грамотно. Продолжаем сотрудничество.',
                'content_en' => 'We ordered a technical audit of the site (analysis of suitability for promotion in search engines), a search for the causes of errors and their elimination. We are satisfied with the work: promptly, professionally and competently. We continue cooperation.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_634582',
                'link_to_profile' => 'https://www.fl.ru/users/ole108/',
                'link_to_project' => '',
                'published_at' => '14.09.2010 в 12:01',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_628902',
                'name_ru' => 'Andrey Medvedev',
                'name_en' => 'Andrey Medvedev',
                'nick' => 'usremont',
                'content_ru' => 'Поработали с Петром!!! )))<br> Нужен был парсер для сайта под MODx, скрипт который на основе тхт файла наполняет сайт статьями и заполняет поля кейвордов дискрипшнов и всё такое.<br> Всё сделано и даже всё работает)) Я очень доволен. )))<br> До Петра за эту работу брались ещё два человека и безрезультатно, а тут за два дня всё было выполнено (кстати как и договаривалис). <br> Рекомендую, отличный программист!!!',
                'content_en' => 'Worked with Peter !!! :-) <br> I needed a parser for a site under MODx, a script which, based on a txt file, fills the site with articles and fills in the fields of keywords and all that. <br> Everything is done and even everything works :) I am very pleased. :-) <br> Until Peter, two more people undertook this work and to no avail, but here everything was completed in two days (by the way, as agreed). <br> I recommend a great programmer !!!',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_628902',
                'link_to_profile' => 'https://www.fl.ru/users/usremont/',
                'link_to_project' => '',
                'published_at' => '04.09.2010 в 15:18',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_626365',
                'name_ru' => 'Дмитрий Live',
                'name_en' => 'Dmitriy Live',
                'nick' => 'open_your_eyes',
                'content_ru' => 'Сотрудничал, +',
                'content_en' => 'Collaborated, +',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_626365',
                'link_to_profile' => 'https://www.fl.ru/users/open_your_eyes/',
                'link_to_project' => '',
                'published_at' => '31.08.2010 в 08:30',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_611003',
                'name_ru' => 'Ivan Bezfamilnyj',
                'name_en' => 'Ivan Bezfamilnyj',
                'nick' => 'Ruspath',
                'content_ru' => 'Брал консультацию, все ок.',
                'content_en' => 'I took a consultation, everything is ok.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_611003',
                'link_to_profile' => 'https://www.fl.ru/users/Ruspath/',
                'link_to_project' => '',
                'published_at' => '03.08.2010 в 21:07',
                'avatar' => 'database/seeds/images/avatars/sm_f_4d468237cd404.jpg',
            ],

            [
                'slug' => 'o_592516',
                'name_ru' => 'Дмитрий Кипренский',
                'name_en' => 'Dmitriy Kiprenskiy',
                'nick' => 'DmitryKeeper',
                'content_ru' => 'Петр – один из наиболее ответственных специалистов, с которыми приходилось работать. Также, судя по результатам работы, чрезвычайно грамотный программист. <br> Конкретно по проекту был выполнен перенос сайта на систему управления MODx, написан дополнительный функционал к MODx, создан интерфейс на JQuery. Задачи были не из простых, но решены были достаточно качественно и оперативно, в процессе предлагались различные способы решения.',
                'content_en' => 'Peter is one of the most responsible specialists with whom we had to work. Also, judging by the results of the work, an extremely competent programmer. <br> Specifically, according to the project, the site was transferred to the MODx control system, additional functionality for MODx was written, an interface for JQuery was created. The tasks were not simple, but they were solved fairly efficiently and promptly; in the process, various solutions were proposed.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_592516',
                'link_to_profile' => 'https://www.fl.ru/users/DmitryKeeper/',
                'link_to_project' => '',
                'published_at' => '30.06.2010 в 20:31',
                'avatar' => 'database/seeds/images/avatars/sm_f_4b5b529bd88c2.jpg',
            ],
            [
                'slug' => 'o_586571',
                'name_ru' => 'Sergey Ts',
                'name_en' => 'Sergey Ts',
                'nick' => 'nejik',
                'content_ru' => 'Очень замечательный и хороший человек. Так же очень хороший программист. Выручил и порядочно выполнил все поставленные цели, в установленные сроки. Цель была создание и доработка шаблона и самого движка Livestreet. Так же исправил все баги с модулями. Во время работы консультировал и давал советы. Проделанной работой очень доволен. Все на высшем уровне. Большое спасибо, буду заказывать еще. Рекомендую!',
                'content_en' => 'Very wonderful and nice person. Also a very good programmer. You have set and fulfilled all your goals. The goal was the creation and refinement of the template and the Livestreet engine itself. Also fixed all bugs with modules. During work, he advised and gave advice. I am very pleased with the work done. All at the highest level. Thank you very much, I will order more. Recommend!',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_586571',
                'link_to_profile' => 'https://www.fl.ru/users/nejik/',
                'link_to_project' => '',
                'published_at' => '20.06.2010 в 14:28',
                'avatar' => 'database/seeds/images/avatars/sm_f_4b9bbda34dced.jpg',
            ],
            [
                'slug' => 'o_582584',
                'name_ru' => 'Vladislav Bosch',
                'name_en' => 'Vladislav Bosch',
                'nick' => 'Rossmann',
                'content_ru' => 'Пётр справился с созданием сайта на отлично, хоть и является начинающим специалистом. Всё чётко, строго по ТЗ, аккуратно, доработки минимальные и выполнены максимально оперативно. Рекомендую, как надёжного и грамотного исполнителя.',
                'content_en' => 'Peter coped with the creation of the site perfectly, although he is a novice specialist. Everything is clear, strictly according to the statement of work, neatly, the modifications are minimal and executed as quickly as possible. I recommend as a reliable and competent developer.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_582584',
                'link_to_profile' => 'https://www.fl.ru/users/Rossmann/',
                'link_to_project' => '',
                'published_at' => '12.06.2010 в 22:53',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_352380',
                'name_ru' => 'Mark Majorov',
                'name_en' => 'Mark Majorov',
                'nick' => 'sexleksaker',
                'content_ru' => 'Приятный человек, хороший PHP специалист. <br> Грамотно и быстро выявил и исправил ошибки на моем сайте. <br> Цена за выполненную работу была вполне приемлема. <br> Рекомендую как довольный клиент.',
                'content_en' => 'Pleasant person, good PHP specialist. <br> Properly and quickly detected and fixed errors on my site. <br> The price for the work done was quite acceptable. <br> I recommend it as a satisfied customer.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_352380',
                'link_to_profile' => 'https://www.fl.ru/users/sexleksaker/',
                'link_to_project' => '',
                'published_at' => '10.03.2009 в 21:41',
                'avatar' => 'database/seeds/images/avatars/sm_f_497331582d172.jpg',
            ],
            [
                'slug' => 'o_335029',
                'name_ru' => 'Владимир Иванов',
                'name_en' => 'Vladimir Ivanov',
                'nick' => 'vlaspb',
                'content_ru' => 'Хороший грамотный специалист в своём деле. <br> Быстро и грамотно разобрался в проблеме сервера и помог грамотно решить их <br> С уважение Влад.',
                'content_en' => 'A good competent specialist in his field. <br> Quickly and competently figured out the server problem and helped to solve them correctly <br> With respect Vlad.',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_335029',
                'link_to_profile' => 'https://www.fl.ru/users/vlaspb/',
                'link_to_project' => '',
                'published_at' => '05.02.2009 в 22:53',
                'avatar' => 'database/seeds/images/avatars/user-default-small.png',
            ],
            [
                'slug' => 'o_328873',
                'name_ru' => 'Андрей Макалкин',
                'name_en' => 'Andrew Makalkin',
                'nick' => 'STIMIK',
                'content_ru' => 'Очень понравилось как была выполнена работа, моментально настроил сервер, хотя многим это не удавалось, рекомендую всем этого фрилансера, буду и дальше работать с ним!',
                'content_en' => 'I really liked how the work was done, instantly set up the server, although many did not succeed, I recommend Petr to everyone, I will continue to work with he',
                'link_to_review' => 'https://www.fl.ru/users/adminoid/opinions/#o_328873',
                'link_to_profile' => 'https://www.fl.ru/users/STIMIK/',
                'link_to_project' => '',
                'published_at' => '24.01.2009 в 03:52',
                'avatar' => 'database/seeds/images/avatars/sm_f_25557caeb903ff47.jpg',
            ],
            [
                'slug' => 'o_327774',
                'name_ru' => 'Дмитрий Соловей',
                'name_en' => 'Dmitriy Solovey',
                'nick' => 'DSolovey',
                'content_ru' => 'Быстро отозвался на проект, так же быстро приступил к выполнению задания. <br> Задача стояла в настройке VPS, нужно было установить apache, mysql,php. Так же установить и настроить панель управления. <br> Много пояснять не пришлось, все схватывал на ходу!<br> Очень доволен работой, спасибо!',
                'content_en' => 'Quickly responded to the project, just as quickly started to complete the task. <br> The task was to configure VPS, it was necessary to install apache, mysql, php. Also install and configure the control panel. <br> I didn’t have to explain much, I grabbed everything on the go! <br> I am very pleased with the work, thank you!',
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
            $page->loadImage($avatar, ['alt_ru' => $reviewData['nick'], 'sort_order_id' => 0]);
            $reviewData['published_at'] = \Carbon\Carbon::createFromFormat("d.m.Y в H:i", $reviewData['published_at']);
            $review = App\Review::create($reviewData);
            $review->page()->save($page);
        }
    }
}
