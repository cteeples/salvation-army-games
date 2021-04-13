using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyEnemy : MonoBehaviour, Kill_Interface
{
    public void onClickAction()
    {
        Destroy(gameObject);
    }

}
