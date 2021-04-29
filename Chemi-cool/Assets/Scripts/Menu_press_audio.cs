using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Menu_press_audio : MonoBehaviour
{
    public AudioSource myButton;
    public AudioClip hoverSound;
    public AudioClip clickSound;

    public void HoverFx()
    {
        myButton.PlayOneShot (hoverSound);
    }

    public void ClickFx()
    {
        myButton.PlayOneShot (clickSound);
    }

}
