<?php

namespace App\Observers;

use App\Image;
use Illuminate\Support\Facades\Storage;

class ImageObserver
{

    public function saving(Image $image)
    {
        if ($image->isDirty('folder')) {
            $original = $image->getOriginal();
            $originalFolder = (isset($original['folder'])) ? $original['folder'] : false;
            $newFolder = $image->folder;
            if ($originalFolder && $originalFolder != $newFolder) {
                $originalFolderArray = explode('/', $originalFolder);
                $newFolderArray = explode('/', $newFolder);
                $ONDiff = array_diff($originalFolderArray, $newFolderArray);
                foreach ($originalFolderArray as $k => $v) {
                    if (array_key_exists($k, $ONDiff)) {
                        $arFrom = array_slice($originalFolderArray, 0, $k + 1);
                        $originalFolderArray[$k] = $newFolderArray[$k];
                        $arTo = array_slice($newFolderArray, 0, $k + 1);
                        $pathFrom = implode('/', $arFrom);
                        $pathTo = implode('/', $arTo);
                        if (Storage::disk('base')->has($pathTo)) {
                            $files = Storage::disk('base')->allFiles($pathTo);
                            if ($files) {
//                                Storage::disk('base')->delete($files);
                                foreach ($files as $file) {
                                    $filePath = base_path() . '/' . $file;
                                    unlink($filePath);
                                }
                            }
                            Storage::disk('base')->deleteDirectory($pathTo);
                        }
                        Storage::disk('base')->move($pathFrom, $pathTo);
                    }
                }
            }

        }
    }

    public function deleting(Image $image)
    {
        $folder = $image->folder;
        $imagePath = $folder . '/' . $image->name . '.' . $image->ext;
        Storage::disk('base')->delete($imagePath);

        $superFolder = $folder;
        while ($superFolder != 'public/images') {
            $files = Storage::disk('base')->allFiles($superFolder);
            if (count($files) < 1) {
                Storage::disk('base')->deleteDirectory($superFolder);
                $slashPos = strrpos($superFolder, '/');
                $superFolder = substr($superFolder, 0, $slashPos);
            } else {
                break;
            }
        }
    }

}